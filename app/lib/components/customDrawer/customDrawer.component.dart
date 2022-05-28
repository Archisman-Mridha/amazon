import "dart:ui";
import "package:flutter/material.dart";

class CustomDrawer extends StatelessWidget {

    const CustomDrawer({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 2, sigmaY: 2),

            child: Drawer(
                backgroundColor: const Color.fromRGBO(20, 25, 32, 0.85),
                shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.only(topRight: Radius.circular(35), bottomRight: Radius.circular(35))
                ),

                child: ListView(
                    children: const <Widget>[ ]
                )
            )
        );
    }
}

            //                 const ListTile(
            //                     title: Text("Navigation Menu", style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
            //                     trailing: Icon(Ionicons.close_circle_outline, color: Colors.white)
            //                 ),

            //                 ListTile(
            //                     title: Row(
            //                         mainAxisAlignment: MainAxisAlignment.end,
            //                         children: <Widget>[
            //                             SvgPicture.asset("assets/svgs/location.svg"),
            //                             const SizedBox(width: 7.5),
            //                             Column(
            //                                 crossAxisAlignment: CrossAxisAlignment.start,
            //                                 children: const <Widget>[
            //                                     Text("Delivering to", style: TextStyle(color: Colors.white, fontSize: 12)),
            //                                     Text("Kolkata, India", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold))
            //                                 ]
            //                             )
            //                         ]
            //                     )
            //                 ),

            //                 const SizedBox(height: 100),

            //                 ListTile(
            //                     leading: SvgPicture.asset("assets/svgs/user.svg"),
            //                     title: Column(
            //                         crossAxisAlignment: CrossAxisAlignment.start,
            //                         children: <Widget>[
            //                             const Text("Hello there", style: TextStyle(color: Colors.white, fontSize: 12)),
            //                             Row(
            //                                 children: const <Widget>[
            //                                     Text("Sign in", style: TextStyle(color: Color.fromRGBO(197, 255, 244, 1), fontWeight: FontWeight.bold)),
            //                                     Padding(
            //                                         padding: EdgeInsets.symmetric(horizontal: 5),
            //                                         child: Text("/", style: TextStyle(color: Color.fromRGBO(197, 255, 244, 1), fontWeight: FontWeight.bold))
            //                                     ),
            //                                     Text("Register", style: TextStyle(color: Color.fromRGBO(197, 255, 244, 1), fontWeight: FontWeight.bold))
            //                                 ],
            //                             )
            //                         ]
            //                     )
            //                 ),

            //                 ListTile(
            //                     leading: const Icon(Ionicons.cart_outline, color: Colors.white),
            //                     title: Row(
            //                         children: <Widget>[
            //                             const Text("Cart", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
            //                             Container(
            //                                 margin: const EdgeInsets.only(left: 10),
            //                                 child: TextButton(
            //                                     onPressed: ( ) => { },
            //                                     style: ButtonStyle(
            //                                         backgroundColor: MaterialStateProperty.all<Color>(const Color.fromRGBO(244, 191, 118, 1)),
            //                                         shape: MaterialStateProperty.all<RoundedRectangleBorder>(
            //                                             RoundedRectangleBorder(borderRadius: BorderRadius.circular(35), side: BorderSide.none)
            //                                         )
            //                                     ),
            //                                     child: const Text("100", style: TextStyle(color: Colors.black))
            //                                 )
            //                             )
            //                         ]
            //                     )
            //                 ),

            //                 const SizedBox(height: 20),
            //                 const Align(
            //                     alignment: Alignment.center,
            //                     child: FractionallySizedBox(
            //                         widthFactor: 0.9,
            //                         child: Divider(color: Color.fromRGBO(255, 255, 255, 0.55))
            //                     )
            //                 ),
            //                 const SizedBox(height: 20),

            //                 ListTile(
            //                     leading: SvgPicture.asset("assets/svgs/new.svg"),
            //                     title: const Text("Latest Products", style: TextStyle(color: Colors.white))
            //                 ),

            //                 const ListTile(
            //                     leading: Icon(Ionicons.bag_handle_outline, color: Colors.white),
            //                     title: Text("Sell with Us", style: TextStyle(color: Colors.white))
            //                 ),

            //                 ListTile(
            //                     leading: SvgPicture.asset("assets/svgs/products.svg"),
            //                     title: const Text("Product Categories", style: TextStyle(color: Colors.white)),
            //                     trailing: const Icon(Ionicons.chevron_down_circle_outline, color: Colors.white)
            //                 ),

            //                 const ListTile(
            //                     leading: Icon(Ionicons.eye_outline, color: Colors.white),
            //                     title: Text("Viewed Products", style: TextStyle(color: Colors.white))
            //                 )
            //             ]
            //         )
            //     )
            // ),