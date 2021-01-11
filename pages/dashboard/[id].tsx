import { useRouter } from 'next/router';
import Head from 'next/head';

import { useQuery, gql } from '@apollo/client';

import { types } from '../../values';
import Graph from '../../components/Graph';

const GET_SESSION = gql`
query GetSession($id: ID!) {
  getSession(sessionId: $id) {
    id,
    users {
      id
      name
      stats {
        searches
        emailsSent
        emailsReceived
        emailsStored
        instagramPics
        snapchatPics
        gamesMinutes
        youtubeMinutes
        netflixMinutes
      }
    }
  }
}
`;


type SessionData = {
  users: [
    {
      _id: string,
      name: string,
      stats: {
        searches: number,
        emailsSent: number,
        emailsReceived: number,
        emailsStored: number,
        instagramPics: number,
        snapchatPics: number,
        gamesMinutes: number,
        youtubeMinutes: number,
        netflixMinutes: number
      }
    },
  ]
}

export default function sessionDashboard() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SESSION, { variables: { id: router.query.id }, pollInterval: 10000 });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div id="dashboard">
    <Head>
      <title>Dashboard | Pollution Numérique</title>
    </Head>
    <header>
      <h1>Session : {data.getSession.id}</h1>
      <div>Lien pour rejoindre la session : <code>{`${location.host}/${data.getSession.id}`}</code></div>
      <div className="legendary">
        {Object.keys(types).map(i => <div key={i} className="item">
          <div className="color" style={{ backgroundColor: types[i].color }}></div>
          <div className="name">{types[i].name}</div>
        </div>)}
      </div>
    </header>
    <section className="users">
      <div className="list">
        {(data.getSession as SessionData).users.map(u => <div key={u._id} className="user">
          <div className="username">{u.name}</div>
          <Graph stats={u.stats} />
        </div>)}
      </div>
    </section>
  </div>;
}
