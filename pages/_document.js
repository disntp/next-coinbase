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
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>

                    <script src={"https://www.paypal.com/sdk/js?client-id=AbKrIWFgyKWjA8b8odXaZsXhZDmID5TszedFdEB8AQCV6dnl6ZhOOkJbtzk4HU-0kvna3EkBsh6ZpOnp"}></script>

                    {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /> */}

                    
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