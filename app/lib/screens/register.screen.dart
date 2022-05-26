import "dart:ui";
import "package:flutter/material.dart";
import "package:flutter/services.dart";
import "package:flutter_svg/flutter_svg.dart";
import "package:ionicons/ionicons.dart";

class RegisterScreen extends StatelessWidget {
    const RegisterScreen({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return Scaffold(

            appBar: PreferredSize(
                preferredSize: const Size(double.infinity, 75.0),
                child: BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 2.5, sigmaY: 2.5),

                    child: AppBar(

                        backgroundColor: const Color.fromRGBO(20, 25, 32, 0.9),
                        automaticallyImplyLeading: false,
                        systemOverlayStyle: const SystemUiOverlayStyle(statusBarColor: Colors.transparent),
                        elevation: 0,
                        toolbarHeight: 75.0,

                        leading: SvgPicture.asset("assets/svgs/logo.svg"),
                        leadingWidth: 50,
                        actions: [

                            Builder(
                                builder: (context) => GestureDetector(
                                    onTap: Scaffold.of(context).openDrawer,

                                    child: const Padding(
                                        padding: EdgeInsets.only(right: 16),
                                        child: Icon(Ionicons.menu_outline)
                                    )
                                )
                            )
                        ],

                        centerTitle: true,
                        titleSpacing: 10,
                        title: Row(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[

                                Container(
                                    decoration: const BoxDecoration(
                                        color: Color.fromRGBO(243, 243, 243, 1),
                                        borderRadius: BorderRadius.only(topLeft: Radius.circular(8.5), bottomLeft: Radius.circular(8.5)),
                                    ),
                                    child: Padding(
                                        padding: const EdgeInsets.symmetric(horizontal: 10),
                                        child: SizedBox(
                                            height: 42.5,
                                            child: Row(
                                                children: <Widget>[
                                                    const Text("All", style: TextStyle(fontSize: 12, color: Colors.black)),
                                                    Container(
                                                        margin: const EdgeInsets.only(left: 3),
                                                        child: SvgPicture.asset("assets/svgs/carret-down-arrow.svg")
                                                    )
                                                ]
                                            )
                                        )
                                    )
                                ),

                                const Expanded(
                                    child: SizedBox(
                                        height: 42.5,
                                        child: TextField(
                                            decoration: InputDecoration(
                                                hintText: "Search Here",
                                                hintStyle: TextStyle(color: Color.fromRGBO(94, 94, 94, 1), fontSize: 13),
                                                filled: true,
                                                fillColor: Colors.white,
                                                contentPadding: EdgeInsets.symmetric(horizontal: 10),
                                                focusedBorder: InputBorder.none,
                                                border: OutlineInputBorder(
                                                    borderRadius: BorderRadius.all(Radius.zero),
                                                    borderSide: BorderSide.none
                                                )
                                            ),

                                            style: TextStyle(fontSize: 12),
                                            textAlignVertical: TextAlignVertical.center
                                        )
                                    )
                                ),

                                Container(
                                    decoration: const BoxDecoration(
                                        color: Color.fromRGBO(244, 191, 118, 1),
                                        borderRadius: BorderRadius.only(topRight: Radius.circular(8.5), bottomRight: Radius.circular(8.5)),
                                    ),
                                    child: Padding(
                                        padding: const EdgeInsets.symmetric(horizontal: 10),
                                        child: SizedBox(
                                            height: 42.5,
                                            child: SvgPicture.asset("assets/svgs/search.svg")
                                        )
                                    )
                                )
                            ]
                        )
                    )
                )
            ),

            drawer: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 2.5, sigmaY: 2.5),

                child: Drawer(

                    backgroundColor: const Color.fromRGBO(20, 25, 32, 0.9),
                    shape: const RoundedRectangleBorder(
                        borderRadius: BorderRadius.only(topRight: Radius.circular(35), bottomRight: Radius.circular(35))
                    ),

                    child: ListView(

                        children: <Widget>[

                            const ListTile(
                                title: Text("Navigation Menu", style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
                                trailing: Icon(Ionicons.close_circle_outline, color: Colors.white)
                            ),

                            ListTile(
                                title: Row(
                                    mainAxisAlignment: MainAxisAlignment.end,
                                    children: <Widget>[
                                        SvgPicture.asset("assets/svgs/location.svg"),
                                        const SizedBox(width: 7.5),
                                        Column(
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: const <Widget>[
                                                Text("Delivering to", style: TextStyle(color: Colors.white, fontSize: 12)),
                                                Text("Kolkata, India", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold))
                                            ]
                                        )
                                    ]
                                )
                            ),

                            const SizedBox(height: 100),

                            ListTile(
                                leading: SvgPicture.asset("assets/svgs/user.svg"),
                                title: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: <Widget>[
                                        const Text("Hello there", style: TextStyle(color: Colors.white, fontSize: 12)),
                                        Row(
                                            children: const <Widget>[
                                                Text("Sign in", style: TextStyle(color: Color.fromRGBO(197, 255, 244, 1), fontWeight: FontWeight.bold)),
                                                Padding(
                                                    padding: EdgeInsets.symmetric(horizontal: 5),
                                                    child: Text("/", style: TextStyle(color: Color.fromRGBO(197, 255, 244, 1), fontWeight: FontWeight.bold))
                                                ),
                                                Text("Register", style: TextStyle(color: Color.fromRGBO(197, 255, 244, 1), fontWeight: FontWeight.bold))
                                            ],
                                        )
                                    ]
                                )
                            ),

                            ListTile(
                                leading: const Icon(Ionicons.cart_outline, color: Colors.white),
                                title: Row(
                                    children: <Widget>[
                                        const Text("Cart", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                                        Container(
                                            margin: const EdgeInsets.only(left: 10),
                                            child: TextButton(
                                                onPressed: ( ) => { },
                                                style: ButtonStyle(
                                                    backgroundColor: MaterialStateProperty.all<Color>(const Color.fromRGBO(244, 191, 118, 1)),
                                                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                                        RoundedRectangleBorder(borderRadius: BorderRadius.circular(35), side: BorderSide.none)
                                                    )
                                                ),
                                                child: const Text("100", style: TextStyle(color: Colors.black))
                                            )
                                        )
                                    ]
                                )
                            ),

                            const SizedBox(height: 20),
                            const Align(
                                alignment: Alignment.center,
                                child: FractionallySizedBox(
                                    widthFactor: 0.9,
                                    child: Divider(color: Color.fromRGBO(255, 255, 255, 0.55))
                                )
                            ),
                            const SizedBox(height: 20),

                            ListTile(
                                leading: SvgPicture.asset("assets/svgs/new.svg"),
                                title: const Text("Latest Products", style: TextStyle(color: Colors.white))
                            ),

                            const ListTile(
                                leading: Icon(Ionicons.bag_handle_outline, color: Colors.white),
                                title: Text("Sell with Us", style: TextStyle(color: Colors.white))
                            ),

                            ListTile(
                                leading: SvgPicture.asset("assets/svgs/products.svg"),
                                title: const Text("Product Categories", style: TextStyle(color: Colors.white)),
                                trailing: const Icon(Ionicons.chevron_down_circle_outline, color: Colors.white)
                            ),

                            const ListTile(
                                leading: Icon(Ionicons.eye_outline, color: Colors.white),
                                title: Text("Viewed Products", style: TextStyle(color: Colors.white))
                            )
                        ]
                    )
                )
            ),

            body: const Center( )
        );
    }
}