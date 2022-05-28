import "package:app/components/customButton/customButton.component.dart";
import "package:app/components/customFormField/customFormField.component.dart";
import "package:flutter/material.dart";
import "package:flutter_svg/flutter_svg.dart";
import "package:google_fonts/google_fonts.dart";
import "package:ionicons/ionicons.dart";

class SigninScreen extends StatelessWidget {

    const SigninScreen({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return Scaffold(

            body: SafeArea(
                child: SingleChildScrollView(
                    child: ConstrainedBox(
                        constraints: BoxConstraints(minHeight: MediaQuery.of(context).size.height),
                        child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 25),
                            child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: <Widget>[

                                    Container(
                                        alignment: Alignment.center,
                                        child: SvgPicture.asset("assets/svgs/logo.svg", width: 100, height: 100)
                                    ),

                                    const SizedBox(height: 25),

                                    Text("Signin", style: TextStyle(fontSize: 22.5, fontFamily: GoogleFonts.montserrat(fontWeight: FontWeight.w900).fontFamily)),

                                    const SizedBox(height: 25),

                                    Form(
                                        child: Column(
                                            children: <Widget>[

                                                CustomFormField(
                                                    hintText: "Email Address or Phone Number",
                                                    prefixicon: SvgPicture.asset("assets/svgs/pen.svg"),
                                                    marginBottom: 17.5
                                                ),

                                                CustomFormField(
                                                    hintText: "Secure Password",
                                                    prefixicon: SvgPicture.asset("assets/svgs/key.svg"),
                                                    suffixicon: const Icon(Ionicons.eye_outline),
                                                    isObscureText: true,
                                                    marginBottom: 5
                                                ),

                                                Container(
                                                    alignment: Alignment.centerRight,
                                                    child: GestureDetector(
                                                        onTap: ( ) => { },
                                                        child: const Text("Forgot Password", style: TextStyle(color: Colors.lightBlue))
                                                    )
                                                ),

                                                const SizedBox(height: 20),

                                                Container(
                                                    alignment: Alignment.centerLeft,
                                                    child: const CustomButton(buttonLabel: "Submit", icon: Icon(Ionicons.arrow_forward_circle_outline))
                                                ),

                                                const SizedBox(height: 40),

                                                Row(
                                                    mainAxisAlignment: MainAxisAlignment.center,
                                                    children: <Widget>[

                                                        const Text("Don't have an account ? "),

                                                        GestureDetector(
                                                            onTap: ( ) => { },
                                                            child: const Text("Register", style: TextStyle(color: Colors.lightBlue))
                                                        ),

                                                        const Text(" here !")
                                                    ]
                                                )
                                            ]
                                        )
                                    )
                                ]
                            )
                        )
                    )
                )
            )
        );
    }
}