
// arranca la aplicación

import app from './app';

// settings
app.set('port', process.env.PORT || 3000);
app.set("json spaces", 2);

// starting the server
async function main(){
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
};

main();