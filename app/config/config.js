module.exports = {
    env: 'development', // 'development', 'production'
    port: 5000,

    // combine with user password
    key: 'C@mb0D1A#K1Nd0m#0F#W0nd3r',
    saltHashPassword: 10,

    // Tokens
    regenerateTokenId: true, // jti
    accessTokenExpiration:  12604800, //12604800, // 900, // second
    refreshTokenExpiration: 365, // day

    // ALS - Alert List System
    als: {
        'url': 'http://167.172.92.229:3012/',
        'public_key_id': 'b87826d5-9350-4855-98bc-c3fa6111cdb6',
        'email': 'voa-644dd10c@immigration.gov.kh',
        'post_key': 'cUEdst254cRWsLgQGEwA',
    },
    
    baseUrl: 'http://localhost:5000/', 
    centralUrl: 'http://localhost:3000/',

    // For File Upload And 
    tmpDir: 'tmp/',
    uploadDir: 'uploads/',
    pdfDir: 'pdf/',
    xlsxDir: 'xlsx/',
    allowMimeTypes: ['image/jpeg','image/png'],
    allowExtension: ['jpg','jpeg','png'],
}