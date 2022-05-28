import "package:flutter/material.dart";
import "package:flutter_svg/flutter_svg.dart";

class Searchbar extends StatelessWidget {

    const Searchbar({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return Row(
            crossAxisAlignment: CrossAxisAlignment.center,

            children: const <Widget>[

                ViewProductCategoriesButton( ),

                SearchArea( ),

                SearchButton( )
            ]
        );
    }
}

class ViewProductCategoriesButton extends StatelessWidget {

    const ViewProductCategoriesButton({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return GestureDetector(
            onTap: ( ) => { },

            child: Container(
                height: 42.5,

                padding: const EdgeInsets.symmetric(horizontal: 10),
                decoration: const BoxDecoration(
                    color: Color.fromRGBO(243, 243, 243, 1),
                    borderRadius: BorderRadius.only(topLeft: Radius.circular(8.5), bottomLeft: Radius.circular(8.5)),
                ),

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
        );
    }
}

class SearchArea extends StatelessWidget {

    const SearchArea({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return const Expanded(
            child: SizedBox(
                height: 42.5,

                child: TextField(

                    style: TextStyle(fontSize: 13),
                    textAlignVertical: TextAlignVertical.center,
                    autocorrect: false,

                    decoration: InputDecoration(
                        hintText: "Search Here",
                        hintStyle: TextStyle(color: Color.fromRGBO(94, 94, 94, 1), fontSize: 13),
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: EdgeInsets.symmetric(horizontal: 10, vertical: 15),
                        focusedBorder: InputBorder.none,
                        border: OutlineInputBorder(borderRadius: BorderRadius.all(Radius.zero), borderSide: BorderSide.none)
                    )
                )
            )
        );
    }
}

class SearchButton extends StatelessWidget {

    const SearchButton({ Key? key }): super(key: key);

    @override
    Widget build(BuildContext context) {

        return Container(
            height: 42.5,

            decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(topRight: Radius.circular(8.5), bottomRight: Radius.circular(8.5)),
                color: Color.fromRGBO(244, 191, 118, 1)
            ),

            child: IconButton(
                onPressed: ( ) => { },
                icon: SvgPicture.asset("assets/svgs/search.svg")
            )
        );
    }
}