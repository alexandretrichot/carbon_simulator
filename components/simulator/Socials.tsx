import React from 'react';
import Lottie from "lottie-react";

type Props = {

}

export default class Socials extends React.Component<Props> {
  render() {
    return <section id="socials">
      <h2>Les Réseaux sociaux</h2>

      <div className="flex">
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/social.json')} />
        </div>
        <div className="pane">
          <p>Sur Instagram, 100.00 millions de photos et de vidéos sont publiées par jours. En parallèle, 4.20 milliards de likes sont comptabilisés quotidiennement.</p>

          <div>Nombre de photos envoyées par jour sur Instagram</div>
          <div className="result">345</div>
          
          <div>Nombre de photos envoyées par jour sur Snapchat</div>
          <div className="result">345</div>
        </div>
      </div>
    </section>;
  }
}
