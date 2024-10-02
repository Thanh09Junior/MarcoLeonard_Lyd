export default function head () {
    const description = "Một con furry nghiện CHUNITHM và mọi thể loại Rhythm game trên mobile (*｀ω´*)";
    const owner = "Marco Leonard";

    return (
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description}/>
            <meta name="keywords" content="Furry, Marco, Leonard, Wolf, Cute, Rhythm, CHUNITHM" />
            <meta name="author" content="Kisune Caneld - Marco Leonard" />
            
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            <meta property="og:title" content={owner} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:url" content="https://my-nextjs-website.com" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={owner} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/twitter-image.png" />

            <meta name="robots" content="index, follow" />

            <meta name="google-site-verification" content="your_verification_token" />

            <link rel="canonical" href="https://www.example.com/this-page" />
        
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" />

            <title>{owner}</title>
        </head>
    );
  }