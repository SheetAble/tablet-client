import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Pdf from "react-native-pdf";
import { Sheet } from "../../redux/slicers/data/dataSlice";

function getBase64(url) {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64")
    );
}

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
        ref={(pdf) => {
          setPdf(pdf);
        }}
        source={source}
        page={1}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {}}
        onPageChanged={(page, numberOfPages) => {}}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {}}
        style={styles.pdf}
        fitWidth={true}
        enableAnnotationRendering={true}
        enablePaging={true}
        horizontal={true}
        onPageSingleTap={(page) => {
          console.log(pdf.pageNumber);
          pdf.setPage((page += 1));
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
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
