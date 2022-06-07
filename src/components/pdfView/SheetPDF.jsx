import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Dimensions, View, Button } from "react-native";
import Pdf from "react-native-pdf";
import SketchCanvas from "../../components/sketchCanvas/SketchCanvas";
import { SketchCanvasRef } from "../../components/sketchCanvas/types";

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
  
  const ref = useRef();

  return (
    <>
      <SketchCanvas
            containerStyle={styles.sketchContainer}
            ref={ref}
            strokeColor="black"
            strokeWidth={1}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  sketchContainer: {
    flex: 1,    
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
