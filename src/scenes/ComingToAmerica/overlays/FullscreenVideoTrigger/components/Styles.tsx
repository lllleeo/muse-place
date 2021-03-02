import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";

type Message = { uuid: string; text: string };

export const ChatContainer = styled.div`
  width: 98%;
  max-width: 350px;
  height: 375px;
  position: absolute;
  bottom: 10px;
  right: 10px;

  display: flex;
  flex-direction: column;
`;

export const StyledSendIcon = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(SendIcon);

export const StyledTextField = withStyles({
  root: {
    color: "#FFFFFF !important",
  },
  "root > input": {
    color: "#ffffff !important",
  },
})(TextField);

export const InputContainer = styled.div`
  border-radius: 20px;
  padding: 10px 12px;
  display: flex;
  background: rgb(101 101 101 / 75%);
  backdrop-filter: blur(9px);
  color: white;
  margin-top: 5px;

  & > * > * {
    color: white !important;
  }

  & > * > div::after {
    border-color: white !important;
  }
`;

const MessageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 8px 25px;
  color: white;
  width: 100%;
  box-sizing: border-box;
  margin: 5px 0;
  overflow: hidden;
  background: rgb(101 101 101 / 75%);
  backdrop-filter: blur(9px);
`;

const Title = styled.p`
  color: #9e9bff;
  margin: 0 0 5px;
  font-size: 0.8rem;
`;

const Body = styled.p`
  color: white;
  margin: 5px 0 0;
  font-size: 0.85rem;
  line-height: 1.1em;
`;

export const LineMessage = (props: Message) => {
  return (
    <MessageContainer>
      <Typography component="div">
        <Title>{props.uuid}</Title>
        <Body>{props.text}</Body>
      </Typography>
    </MessageContainer>
  );
};

const LogContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;

  & * {
    overflow-anchor: none;
  }

  & > #anchor {
    overflow-anchor: auto;
    height: 1px;
  }
`;

export const Log = (props: { messages: Message[] }) => {
  return (
    <LogContainer>
      {props.messages.map((item, index) => (
        <LineMessage key={index} uuid={item.uuid} text={item.text} />
      ))}
      <div id="anchor"></div>
    </LogContainer>
  );
};
