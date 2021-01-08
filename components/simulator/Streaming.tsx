import React from 'react';
import Lottie from "lottie-react";
import values from '../../values';
import CarbonSum from '../CarbonSum';
import Counter from '../Counter';
import Section from './Section';

type Props = {
  youtubeMinutes: number,
  netflixMinutes: number,
  onUpdateYoutube: (value: number) => void,
  onUpdateNetflix: (value: number) => void,
}

export default class Streaming extends React.Component<Props> {
  render() {
    return <Section
      title="Vos soirées Netfilx"
      description="[texte pour la VOD]"
      animation={require('../../assets/animations/streaming.json')}
      counters={<>
        <Counter title="Minutes passé sur Youtube par jours" description={''} value={this.props.youtubeMinutes} onUpdate={value => this.props.onUpdateYoutube(value)} step={10} />
        <Counter title="Minutes passé sur Netflix par jours" description={''} value={this.props.netflixMinutes} onUpdate={value => this.props.onUpdateNetflix(value)} step={10} />
      </>}
      footer={
        <>
          <CarbonSum value={this.props.youtubeMinutes * values.gramPerStreamMinute + this.props.netflixMinutes * values.gramPerStreamMinute} />
        </>
      }
    >
      <p>Chaque années, YouTube et les plateformes de vidéos eu lignes génèrent <b>65 millions</b> de tonnes de CO<sub>2</sub>.</p>
      <p>Les services de VOD comme Netflix ou Amazon prime en génèrent quand à eux <b>102 millions</b>.</p>
      <p>Combinés, ils dégagent plus de <b>170 millions</b> de tonnes de CO<sub>2</sub> sur une année.</p>
    </Section>;
  }
}
