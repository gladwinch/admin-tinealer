let s3 

const analytics = (User) => async () => {
  console.log('analytics running...')
  return 'working!'
}

module.exports = ({ AdminDAL }) => {
  //export :TODO

  return {
    analytics: analytics(AdminDAL)
  }
}