import "package:app/components/customButton/customButton.component.dart";
import "package:app/components/customFormField/customFormField.component.dart";
import "package:flutter/material.dart";
import "package:flutter_svg/flutter_svg.dart";
import "package:google_fonts/google_fonts.dart";
import "package:ionicons/ionicons.dart";

class RegisterScreen extends StatelessWidget {
    const RegisterScreen({ Key? key }): super(key: key);

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

                                    Text("Register", style: TextStyle(fontSize: 22.5, fontFamily: GoogleFonts.montserrat(fontWeight: FontWeight.w900).fontFamily)),

                                    const SizedBox(height: 25),

                                    Form(
                                        child: Column(
                                            children: <Widget>[

                                                CustomFormField(
                                                    hintText: "Full Name",
                                                    prefixicon: SvgPicture.asset("assets/svgs/pen.svg"),
                                                    marginBottom: 17.5
                                                ),

                                                const CustomFormField(
                                                    hintText: "Email Address",
                                                    prefixicon: Icon(Ionicons.mail_outline, color: Colors.black),
                                                    marginBottom: 17.5
                                                ),

                                                const CustomFormField(
                                                    hintText: "Phone Number",
                                                    prefixicon: Icon(Ionicons.call_outline, color: Colors.black),
                                                    marginBottom: 17.5
                                                ),

                                                const CustomFormField(
                                                    hintText: "Delivery Address",
                                                    prefixicon: Icon(Ionicons.location_outline, color: Colors.black),
                                                    suffixicon: Icon(Ionicons.locate_outline),
                                                    marginBottom: 17.5
                                                ),

                                                CustomFormField(
                                                    hintText: "Secure Password",
                                                    prefixicon: SvgPicture.asset("assets/svgs/key.svg"),
                                                    suffixicon: const Icon(Ionicons.eye_outline),
                                                    isObscureText: true,
                                                    marginBottom: 25
                                                ),

                                                Container(
                                                    alignment: Alignment.centerLeft,
                                                    child: const CustomButton(buttonLabel: "Submit", icon: Icon(Ionicons.arrow_forward_circle_outline))
                                                ),

                                                const SizedBox(height: 40),

                                                Row(
                                                    mainAxisAlignment: MainAxisAlignment.center,
                                                    children: <Widget>[

                                                        const Text("Already have an account ? "),

                                                        GestureDetector(
                                                            onTap: ( ) => { },
                                                            child: const Text("Sign in", style: TextStyle(color: Colors.lightBlue))
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