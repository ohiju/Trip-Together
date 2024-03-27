import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary} from '../../constants/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlashMobStackParams} from '../../interfaces/router/flashMob/FlashMobStackParams';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, {text: newMessage, sender: 'user'}]);
      setNewMessage('');
    }
  };

  const toggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  const handleMoneyGet = () => {
    navigation.navigate('MoneyGet');
  };

  const handleMoneyGive = () => {
    navigation.navigate('MoneyGive');
  };

  const handleMoneyList = () => {
    navigation.navigate('MoneyList');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={
              message.sender === 'user'
                ? styles.userMessage
                : styles.otherMessage
            }>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={toggleAdditionalButtons}>
          {!showAdditionalButtons ? (
            <Text style={styles.addButtonText}>+</Text>
          ) : (
            <Text style={styles.addButtonText}>X</Text>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="채팅을 입력하세요"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>
      </View>

      {showAdditionalButtons && (
        <View style={styles.additionalButtons}>
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleMoneyGet}>
            <Text style={styles.additionalButtonText}>정산</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleMoneyGive}>
            <Text style={styles.additionalButtonText}>송금</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleMoneyList}>
            <Text style={styles.additionalButtonText}>내역</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    maxWidth: '80%',
    padding: 10,
    marginBottom: 5,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E4E4',
    borderRadius: 10,
    maxWidth: '80%',
    padding: 10,
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: primary,
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 5,
    marginRight: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  additionalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 10,
    color: '#FFFFFF',
  },
  additionalButton: {
    backgroundColor: primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  additionalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatRoom;
