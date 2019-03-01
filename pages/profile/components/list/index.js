import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from './components/card.js';
var moment = require('moment');

export default () =>
  <ScrollView>
    <Card title="hello" date={moment().format("MMMM Do, YYYY").toString()} text="bla bla bla aifga asoidf jasdif jiajfoiajfg iwre ngorwngiornfoasj idjfoia sjnigf gawriofg isjfg ioasjgiajfig" />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card last={true} />
    <View style={{height: 20}} />
  </ScrollView>
