const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-central-1" });

const dynamoDB = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "test",
  KeySchema: [
   
    {
     
      AttributeName: "id",
      KeyType: "HASH"
    }
  
  ],
  AttributeDefinitions: [
   
    {
      AttributeName: "id",
      AttributeType: "S" 
    },
    {
      AttributeName: "ssh",
      AttributeType: "N" 
    }
   
  ],
  ProvisionedThroughput: {
    
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  GlobalSecondaryIndexes: [
   
    {
      IndexName: "ssh_index",
      KeySchema: [
        {
       
          AttributeName: "ssh",
          KeyType: "HASH"
        }
      ],
      Projection: {
       
        ProjectionType: "ALL" 
      },
      ProvisionedThroughput: {
       
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }
  
  ]
};
dynamoDB.createTable(params, function(err, data) {
  if (err) {
    console.log("error :" + JSON.stringify(err));
  } 
  else console.log("success :" + JSON.stringify(data)); // successful response
});
