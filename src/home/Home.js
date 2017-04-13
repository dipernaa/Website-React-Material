import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const styles = {
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  avatarHolder: {
    alignItems: 'center',
    display: 'flex',
    height: 160,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: 20,
    width: 160,
    zIndex: 3
  },
  card: {
    left: 0,
    margin: 20,
    position: 'absolute',
    right: 0,
    top: 170,
    zIndex: 1
  }
};

const Home = () => (
  <div>
    <Paper circle style={styles.avatarHolder}>
      <Avatar size={150} src="../images/profile.jpg" style={styles.avatar}/>
    </Paper>
    <Card style={styles.card}>
      <CardHeader/>
      <CardTitle title="Software Engineer"/>
      <CardText>I am Milwaukee bred and I make software. I can usually be found wherever pizza is being served.</CardText>
    </Card>
  </div>
);

export default Home;
