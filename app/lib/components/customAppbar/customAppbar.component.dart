import "dart:ui";
import "package:app/components/searchbar/searchbar.component.dart";
import "package:flutter/material.dart";
import "package:flutter/services.dart";
import "package:flutter_svg/flutter_svg.dart";

class CustomAppbar extends StatelessWidget implements PreferredSizeWidget {

    const CustomAppbar({ Key? key }): super(key: key);

    @override
    Size get preferredSize => const Size(double.infinity, 75.0);

    @override
    Widget build(BuildContext context) {

        return BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 0, sigmaY: 0),

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
                                child: Icon(Icons.menu, size: 22.5)
                            )
                        )
                    )
                ],

                centerTitle: true,
                titleSpacing: 10,

                title: const Searchbar( )
            )
        );
    }
}