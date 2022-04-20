import Document, {Html, Head, Main, NextScript} from 'next/document'
// import { ServerStyleSheets } from '@material-ui/core/styles';
class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name='description' content='Dev Ecommerce Web'></meta>
                    <link rel="stylesheet" 
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <link
                    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
                    rel="stylesheet"/>
                    
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
                    {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script> */}
                    {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></Script> */}

                    
                </Head>
                <body>
                    
                    <Main/>
                    <NextScript/>
                    
                </body>
                
            </Html>
        )
    }
}

export default MyDocument