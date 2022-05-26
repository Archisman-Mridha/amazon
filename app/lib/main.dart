// import "package:app/screens/home.screen.dart";
import "package:app/screens/register.screen.dart";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";

void main( ) => runApp(const App( ));

class App extends StatelessWidget {
    const App({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return MaterialApp(

            title: "Amazon Clone",
            debugShowCheckedModeBanner: false,

            theme: ThemeData(

                fontFamily: GoogleFonts.montserrat(fontWeight: FontWeight.w500).fontFamily
            ),

            initialRoute: "/",
            routes: {

                "/": (context) => const RegisterScreen( ),
                // "/register": (context) => const RegisterScreen( )
            }
        );
    }
}