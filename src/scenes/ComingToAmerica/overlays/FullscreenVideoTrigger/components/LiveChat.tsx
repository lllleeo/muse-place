import { useEffect, useMemo, useState } from "react";
import PubNub from "pubnub";
import useInput from "../hooks/useInput";
import {
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Button,
  Typography,
  Input,
} from "@material-ui/core";

// List of messages component
function Log(props) {
  return (
    <List component="nav">
      <ListItem>
        <Typography component="div">
          {props.messages.map((item, index) => (
            <Message key={index} uuid={item.uuid} text={item.text} />
          ))}
        </Typography>
      </ListItem>
    </List>
  );
}

// Message component
function Message(props: { uuid: string; text: string }) {
  return (
    <div>
      {props.uuid}: {props.text}
    </div>
  );
}

const LiveChat = () => {
  const defaultChannel = "Screening Room";
  const [channel] = useState(defaultChannel);
  const [messages, setMessages] = useState([]);
  const [username] = useState(["user", new Date().getTime()].join("-"));
  const chatMessage = useInput();
  const pubnub = useMemo(() => {
    return new PubNub({
      publishKey: "pub-c-5ab0e177-a72b-4a58-861c-0fc226fc4243",
      subscribeKey: "sub-c-b195c3ec-7262-11eb-9641-66d8dbfc759a",
      uuid: username,
    });
  }, [username]);

  // Set up PubNub
  useEffect(() => {
    console.log("Setting up PubNub");

    // Add listeners
    pubnub.addListener({
      status: (statusEvent) => {
        if (statusEvent.category === "PNConnectedCategory") {
          console.log("Connected to PubNub!");
        }
      },
      message: (msg) => {
        if (msg.message.text) {
          let newMessages = [];
          newMessages.push({
            uuid: msg.message.uuid,
            text: msg.message.text,
          });
          setMessages((messages) => messages.concat(newMessages));
        }
      },
    });

    // Subscribe to channel
    pubnub.subscribe({
      channels: [channel],
    });

    // Fetch history
    pubnub.history(
      {
        channel: channel,
        count: 10, // default 100
        stringifiedTimeToken: true, // default false
      },
      (status, response) => {
        let newMessages = [];
        for (let i = 0; i < response.messages.length; i++) {
          newMessages.push({
            uuid: response.messages[i].entry.uuid,
            text: response.messages[i].entry.text,
          });
        }
        setMessages((messages) => messages.concat(newMessages));
      }
    );

    // End
    return () => {
      console.log("Shutting down pubnub");
      pubnub.unsubscribeAll();
      setMessages([]);
    };
  }, [pubnub, channel, username]);

  // Handle inputs
  function handleKeyDown(event) {
    if (event.target.id === "messageInput") {
      if (event.key === "Enter") {
        publishMessage();
      }
    }
  }

  // Sending messages via PubNub
  function publishMessage() {
    if (chatMessage.value) {
      let messageObject = {
        text: chatMessage.value,
        uuid: username,
      };

      pubnub.publish({
        message: messageObject,
        channel: channel,
      });

      chatMessage.setValue("");
    }
  }

  // Create page component
  return (
    <Card>
      <CardContent>
        <div className="top">
          <Typography variant="h4" inline="true">
            Screening Room Chat
          </Typography>
        </div>
        <div>
          <Log messages={messages} />
        </div>
      </CardContent>
      <CardActions>
        <Input
          placeholder="Enter a message"
          fullWidth={true}
          id="messageInput"
          value={chatMessage.value}
          onChange={chatMessage.onChange}
          onKeyDown={handleKeyDown}
          inputProps={{ "aria-label": "Message Field" }}
          autoFocus={true}
        />
        <Button size="small" color="primary" onClick={publishMessage}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default LiveChat;
