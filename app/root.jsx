import { Meta,Links, Outlet,Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react"
import styles from "~/styles/index.css"
import Header from "~/components/header"
import Footer from "~/components/footer"

export function meta(){
    return (
        [{
            charset:'utf-8',
            title: 'Muebles Navarro',
            viewport: "width-device-width,initial-scale-1"
        }]
    )
}

export function links(){
    return[

        {
            rel:"stylesheet",
            href:"https://necolas.github.io/normalize.css/latest/normalize.css"
        },
        {
            rel:"stylesheet",
            href:styles
        },
        {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" 
        }
    ]
}

export default function App(){

    return(
       <Document>
           <Outlet/>
       </Document>
    )
}

function Document({children}){
    return (
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>

    )
}

/** Manejo de errores */
export function ErrorBoundary(){
    const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <h1 className="error">
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
        <Link className="error-enlace" to='/'>Tal vez quiera volver a la página principal</Link>
      </Document>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}