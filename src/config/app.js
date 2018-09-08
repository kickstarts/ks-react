export default {

  allowTextFontScaling: true,

  name    : 'React Kickstart',
  contact : 'email@reactkickstart.com',

  // API -----------------------------------------------------------------

  api: {
    production  : 'https://www.domain.com',
    stage       : 'https://stage.domain.com/api/v1',
    development : 'https://dev.domain.com/api/v1',
    local       : 'http://127.0.0.1:3333/api/v1'
  },

  // AUTH -----------------------------------------------------------------

  auth: {
    secret_key : {
      production  : '',
      stage       : '',
      development : '',
      local       : ''
    },
    facebook: {
      development: {
        client_id     : '',
        client_secret : '',
        callback_url  : '',
        scope         : [ 'id', 'email', 'displayName', 'name', 'gender', 'picture.type(large)' ]
      },
      sandbox: {
        client_id     : '',
        client_secret : '',
        callback_url  : '',
        scope         : [ 'id', 'email', 'displayName', 'name', 'gender', 'picture.type(large)' ]
      },
      staging: {
        client_id     : '',
        client_secret : '',
        callback_url  : '',
        scope         : [ 'id', 'email', 'displayName', 'name', 'gender', 'picture.type(large)' ]
      },
      production: {
        client_id     : '',
        client_secret : '',
        callback_url  : '',
        scope         : [ 'id', 'email', 'displayName', 'name', 'gender', 'picture.type(large)' ]
      }
    },
    google: {}
  },


  // PUSH NOTIFICATIONS -----------------------------------------------------------------

  notifications: {
    onesignal: {
      key  : '',
      logs : '',
      mail : '',
      url  : ''
    },
    twillio: {
      development: {
        sid   : '',
        token : '',
        from  : '',
      },
      production: {
        sid   : '',
        token : '',
        from  : '',
      }
    }
  }

}
