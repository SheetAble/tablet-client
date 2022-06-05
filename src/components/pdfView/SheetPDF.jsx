import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Pdf from "react-native-pdf";


export default function SheetPDF({ sheet }) {


  const source = {
    uri: `${axios.defaults.baseURL}/${sheet.pdfUrl}`,
    cache: true,
    expiration: 0,
    headers: {
      Authorization: axios.defaults.headers.common["Authorization"],
    },
  };

  const [pdf, setPdf] = useState(undefined);

  return (
    <View style={styles.container}>
      <Pdf
        ref={(pdf) => {setPdf(pdf)}}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {}}
        onPageChanged={(page, numberOfPages) => {}}
        onError={(error) => {console.log(error);}}
        style={styles.pdf}
        enablePaging={true}
        horizontal={true}
        

        onPageSingleTap={(page, x, y) => {
          if (x > 500) {
            pdf.setPage((page += 1));
          } else {pdf.setPage((page -= 1));}
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
