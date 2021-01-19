import React from 'react';
import { formatGES, formatKWh } from '../../utils';

import values from '../../values';

import Counter from '../Counter';
import Sum from '../Sum';
import Section from './Section';

type Props = {
  searches: number,
  onUpdateSearches: (searches: number) => void,
}

export default function SearchesSection(props: Props) {
  return <Section
    title="Vos recherches sur internet"
    description={<>En moyenne, une recherche sur un moteur de recherche comme Google, Bing ou Yahoo! consomme environ {formatKWh(values.kwh.search)} et emet environ {formatGES(values.ges.search)}.</>}
    animation={require('../../assets/animations/search.json')}
    counters={<Counter title="Recherches" description={'Ceci est votre nombre moyen de recherches sur internet par jour.'} step={1} value={props.searches} onUpdate={value => props.onUpdateSearches(value)} />}
    footer={<>
      <Sum kwh={props.searches * values.kwh.search} ges={props.searches * values.ges.search} />
    </>}
  >
    <p>Chaque seconde, Google doit répondre à <b>38 000</b> requêtes. Soit <b>2,28 millions</b> par minute et plus de <b>137 millions par heures</b>.</p>
    <p>Cela a pour effet de consommer {formatKWh(values.kwh.search * 38000 * 60 * 60)} et de dégager {formatGES(values.ges.search * 38000 * 60 * 60)} chaque heure en permanence.</p>
    <p><i>Note : Ecosia est le seul moteur de recherche ayant un bilan carbone positif. Les rejets de CO<sub>2</sub> sont compensés par des replantations d'arbres.</i></p>
  </Section>
}
