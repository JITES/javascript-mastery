import AWS from 'aws-sdk';
export const dynamoDBInstance = () =>
  new AWS.DynamoDB({
    region: 'eu-central-1',
  });

const appendStatus = (heading, status, desc) => {
  const updatedAt = new Date().toISOString();

  return {
    [heading]: {
      stageStatus: status,
      statusDesc: desc,
      updatedAt,
    },
  };
};

const myLambda = () => {
  let arr = [];

  arr.push(appendStatus('s3-upload', 'Success', 'I don t know'));
  arr.push(appendStatus('Xinet-upload', 'Success', 'I don t know'));

  updateMultipleStatus('assetDownloadBinary', arr);
};

const updateMultipleStatus = (stage, statues) => {
  const statusesToDB = AWS.DynamoDB.Converter.marshall(Object.assign({}, statues));

  const params = {
    TableName: 'tableName',
    Key: 'key',
    UpdateExpression: `set ${'JOB_STATUS'}.#stage = :status, ${'UPDATED_AT'} = :updatedAt`,
    ExpressionAttributeValues: {
      ':status': statusesToDB,
    },
    ExpressionAttributeNames: { '#stage': stage },
    ReturnValues: 'UPDATED_NEW',
  };
  console.dir(params, { depth: null });
};

myLambda();
