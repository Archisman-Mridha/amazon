import "package:flutter/material.dart";

class CustomFormField extends StatelessWidget {

    final String hintText;
    final Widget prefixicon;
    final Widget? suffixicon;
    final bool? isObscureText;
    final double? marginBottom;

    const CustomFormField({

        Key? key,
        required this.hintText,
        required this.prefixicon,
        this.suffixicon,
        this.isObscureText,
        this.marginBottom
    })
        : super(key: key);

    @override
    Widget build(BuildContext context) {

        return Column(
            children: [

                TextFormField(

                    obscureText: isObscureText ?? false,

                    style: const TextStyle(fontSize: 14),

                    decoration: InputDecoration(
                        hintText: hintText,
                        hintStyle: const TextStyle(fontSize: 14),

                        prefixIcon: Padding(padding: const EdgeInsets.symmetric(horizontal: 10), child: prefixicon),
                        prefixIconConstraints: const BoxConstraints(minHeight: 32.5, minWidth: 32.5),
                        suffixIcon: suffixicon,

                        contentPadding: const EdgeInsets.symmetric(vertical: 15, horizontal: 5),

                        enabledBorder: const OutlineInputBorder(
                            borderSide: BorderSide(color: Color.fromRGBO(0, 0, 0, 0.1), width: 1.5),
                            borderRadius: BorderRadius.all(Radius.circular(7))
                        ),
                        focusedBorder: const OutlineInputBorder(
                            borderSide: BorderSide(width: 1.5, color: Colors.lightBlue),
                            borderRadius: BorderRadius.all(Radius.circular(7))
                        )
                    )
                ),

                SizedBox(height: marginBottom)
            ]
        );
    }
}