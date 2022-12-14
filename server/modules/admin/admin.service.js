let s3 

const analytics = AdminDAL => async () => {
  console.log('analytics running...')
  AdminDAL.checkModel()
  return 'working!'
}

const create = AdminDAL => async (payload) => {
  console.log('AdminDAL: ', AdminDAL)
  console.log('payload: ', payload)
  return await AdminDAL.create(payload)
}

const read = AdminDAL => async (query) => {
  return await AdminDAL.read(query)
} 

module.exports = ({ AdminDAL }) => {
  //export :TODO

  return {
    analytics: analytics(AdminDAL),
    create: create(AdminDAL),
    read: read(AdminDAL)
  }
}