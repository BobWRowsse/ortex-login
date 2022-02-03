import * as Yup from "yup";

export const validateLogin = Yup.object({
  personnummer: Yup.string()
    .transform((val) => val.toString())
    .trim()
    .required("Personnummer required")
    .test(function (input) {
      // Check valid length & form
      if (!input) {
        return this.createError({
          message: "Personnummer saknas",
        });
      }
      if (input.indexOf("-") === -1) {
        if (input.length === 10) {
          input = input.slice(0, 6) + "-" + input.slice(6);
        } else {
          input = input.slice(0, 8) + "-" + input.slice(8);
        }
      }
      if (
        !input.match(
          /^(\d{2})(\d{2})(\d{2})-(\d{4})|(\d{4})(\d{2})(\d{2})-(\d{4})$/
        )
      ) {
        return this.createError({
          message: "Ange ditt personnummer 12-siffrigt (ÅÅÅÅMMDDXXXX)",
        });
      }
      // Clean input
      input = input.replace("-", "");
      if (input.length !== 12) {
        return this.createError({
          message: "Ange ditt personnummer 12-siffrigt (ÅÅÅÅMMDDXXXX)",
        });
      } else if (input.length === 12) {
        input = input.substring(2);
      }

      // Declare variables
      var d = new Date(
          !RegExp.$1 ? RegExp.$1 : RegExp.$5,
          (!RegExp.$2 ? RegExp.$2 : RegExp.$6) - 1,
          !RegExp.$3 ? RegExp.$3 : RegExp.$7
        ),
        sum = 0,
        numdigits = input.length,
        parity = numdigits % 2,
        i,
        digit;

      // Check valid date
      if (
        Object.prototype.toString.call(d) !== "[object Date]" ||
        isNaN(d.getTime())
      )
        return this.createError({
          message: "Angivet personnummer existerar inte",
        });

      // Check luhn algorithm
      for (i = 0; i < numdigits; i = i + 1) {
        digit = parseInt(input.charAt(i), 10);
        if (i % 2 === parity) {
          digit *= 2;
        }
        if (digit > 9) {
          digit -= 9;
        }
        sum += digit;
      }
      if (sum % 10 === 0) {
        return true;
      } else {
        return this.createError({
          message: "Angivet personnummer existerar inte",
        });
      }
    }),
});
