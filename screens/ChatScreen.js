import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '@env';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    try {
      setIsLoading(true);
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: inputText }],
        model: "gpt-3.5-turbo",
      });

      const botMessage = { 
        text: completion.choices[0].message.content,
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.isBot ? styles.botMessage : styles.userMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me anything about cooking..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Add chat screen styles
export default ChatScreen; 