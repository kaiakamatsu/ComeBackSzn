const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
    bottom: "15%"
  },
  roundButton: {
    padding: 25,
    borderRadius: 120,
    backgroundColor: '#ffb6c1',
    position: 'absolute',
    bottom: 350,
    left:"20%",
  },
  roundButton2: {
    padding: 25,
    borderRadius: 120,
    backgroundColor: '#f0fff0',
    position: 'absolute',
    bottom: 350,
    left: "60%",
  }
});

function chillout(){
    Alert.alert("You must be excited!", "The rest of this app is still in progress.", ["Okay..."]);
  }
  
  function login(){
    
  }

/*
                <TouchableOpacity
                  onPress={chillout}
                  style={styles.roundButton}>
                  <Text>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={chillout}
                  style={styles.roundButton2}>
                  <Text>Sign up</Text>
              </TouchableOpacity>
*/