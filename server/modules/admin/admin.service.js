let s3 

const analytics = (AdminDAL) => async () => {
  console.log('analytics running...')
  AdminDAL.checkModel()
  return 'working!'
}

module.exports = ({ AdminDAL }) => {
  //export :TODO

  return {
    analytics: analytics(AdminDAL)
  }
}