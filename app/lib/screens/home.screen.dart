import "package:app/components/customAppbar/customAppbar.component.dart";
import "package:app/components/customDrawer/customDrawer.component.dart";
import "package:flutter/material.dart";

class HomeScreen extends StatelessWidget {
    const HomeScreen({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return const Scaffold(

            appBar: CustomAppbar( ),

            drawer: CustomDrawer( ),

            body: SafeArea(
                child: Center(
                    child: Text("welcome to amazon")
                )
            )
        );
    }
}