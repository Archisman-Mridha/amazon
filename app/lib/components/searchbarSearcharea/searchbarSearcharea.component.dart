import "dart:ui";
import "package:flutter/material.dart";
import "package:ionicons/ionicons.dart";

const List<String> suggestions = <String>[

    "Electronic Products",
    "Home Accessories",
    "Kitchen Utensils",
];

class SearchbarSearcharea extends StatefulWidget {

    const SearchbarSearcharea({ Key? key }): super(key: key);

    @override
    State<SearchbarSearcharea> createState( ) => SearchbarSearchareaState( );
}

class SearchbarSearchareaState extends State<SearchbarSearcharea> {

    final ValueNotifier<double?> autocompletionViewWidthNotifier= ValueNotifier(null);

    @override
    Widget build(BuildContext context) {

        return Autocomplete(

            fieldViewBuilder: (BuildContext _, TextEditingController textEditingController, FocusNode focusNode, VoidCallback onFieldSubmitted) {

                return OrientationBuilder(
                    builder: (context, orientation) {

                        WidgetsBinding.instance.addPostFrameCallback(
                            (timeStamp) => autocompletionViewWidthNotifier.value = (context.findRenderObject( ) as RenderBox).size.width
                        );

                        return TextField(

                            style: const TextStyle(fontSize: 13),
                            textAlignVertical: TextAlignVertical.center,
                            autocorrect: false,

                            focusNode: focusNode,
                            controller: textEditingController,
                            onSubmitted: (String searchString) => onFieldSubmitted( ),

                            decoration: const InputDecoration(
                                hintText: "Search Here",
                                hintStyle: TextStyle(color: Color.fromRGBO(94, 94, 94, 1), fontSize: 13),
                                filled: true,
                                fillColor: Colors.white,
                                contentPadding: EdgeInsets.symmetric(horizontal: 10, vertical: 15),
                                focusedBorder: InputBorder.none,
                                border: OutlineInputBorder(borderRadius: BorderRadius.all(Radius.zero), borderSide: BorderSide.none)
                            )
                        );
                    }
                );
            },

            optionsBuilder: (TextEditingValue textEditingValue) {

                if(textEditingValue.text.isEmpty) return const Iterable<String>.empty( );

                return suggestions;
            },

            optionsViewBuilder: (BuildContext context, AutocompleteOnSelected<String> onSelected, Iterable<String> options) {

                return Align(
                    alignment: Alignment.topLeft,

                    child: ValueListenableBuilder<double?>(
                        valueListenable: autocompletionViewWidthNotifier,

                        builder: (context, width, _) => Container(

                            width: width,
                            constraints: const BoxConstraints(maxHeight: 375),
                            margin: const EdgeInsets.only(top: 5),

                            child: ClipRRect(
                                borderRadius: BorderRadius.circular(10),

                                child: BackdropFilter(
                                    filter: ImageFilter.blur(sigmaX: 2, sigmaY: 2),

                                    child: Container(
                                        color: const Color.fromRGBO(243, 243, 243, 0.9),
                                        padding: const EdgeInsets.symmetric(horizontal: 10),

                                        child: ListView.builder(
                                            shrinkWrap: true,

                                            itemCount: suggestions.length,

                                            itemBuilder: (BuildContext context, int index) => Material(
                                                color: Colors.transparent,
                                                borderRadius: BorderRadius.circular(15),

                                                child: Column(
                                                    children: <Widget>[

                                                        Row(
                                                            children: <Widget>[

                                                                const Icon(Ionicons.cube_outline, color: Colors.black, size: 18),

                                                                const SizedBox(width: 10),

                                                                Text(suggestions[index], style: const TextStyle(fontSize: 13))
                                                            ]
                                                        ),

                                                        const SizedBox(height: 10)
                                                    ]
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }
        );
    }
}