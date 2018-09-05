export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-6syhpg99529i"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://padydi5fn3.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_l2WNr9Uly",
      APP_CLIENT_ID: "rk5bt539tt9tpp97v9p2anv0u",
      IDENTITY_POOL_ID: "us-east-2:786d738f-d64e-43e3-9bac-c7f0382b6010"
    }
  };