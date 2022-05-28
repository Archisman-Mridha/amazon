import "package:flutter/material.dart";

class CustomButton extends StatelessWidget {

    final String buttonLabel;
    final Widget icon;

    const CustomButton({

        Key? key,
        required this.buttonLabel,
        required this.icon
    })
        : super(key: key);

    @override
    Widget build(BuildContext context) {

        return ElevatedButton(
            onPressed: ( ) => { },

            style: ButtonStyle(
                shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(35), side: BorderSide.none)),
                backgroundColor: MaterialStateProperty.all(const Color.fromRGBO(37, 47, 62, 1)),
                foregroundColor: MaterialStateProperty.all(Colors.white),
                elevation: MaterialStateProperty.all(0),
                padding: MaterialStateProperty.all(const EdgeInsets.symmetric(horizontal: 17.5, vertical: 10))
            ),

            child: Row(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[

                    Text(buttonLabel),
                    const SizedBox(width: 10),
                    icon
                ]
            ),
        );
    }
}