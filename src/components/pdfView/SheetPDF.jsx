import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Dimensions, View, Button, Text } from "react-native";
import Pdf from "react-native-pdf";
import SketchCanvas from "../../components/sketchCanvas/SketchCanvas";
import { SketchCanvasRef } from "../../components/sketchCanvas/types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../constants/GlobalStyleSheet";
import Svg, { Path } from 'react-native-svg';




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

  const [sketchEnabled, setSketchEnabled] = useState(false)
  const [paths, setPaths] = useState([])


  return (
    <>
    { sketchEnabled &&
      (
        <>
          <View style={styles.sketchToolbarContainer}>
            <View style={styles.sketchToolbarLeft}>
              <Ionicons
                name="pencil-outline"
                color="black"
                size={25}
              />
            </View>
            <View style={styles.sketchToolbarRight}>
              <Ionicons
                name="close"
                color="red"
                size={34}
                onPress={() => {
                  ref.current.getPaths().map(path => {
                    console.log("set path", path.path.toSVGString());
                    setPaths(oldP => [...oldP, path])
                    console.log(paths.length);
                  })
                  setPaths(ref.current.getPaths())
                  console.log(ref.current.getPaths().length);
                  console.log(paths.length)
                  console.log("logtog: " + paths.map(p => console.log(p.path.toSVGString())));
                  setSketchEnabled(false)
                }
                }
              />
              <Ionicons
                name="close-outline"
                color="black"
                size={34}
                onPress={() => setSketchEnabled(false)}
              />
            </View>
          </View>
          <SketchCanvas
                containerStyle={styles.sketchContainer}
                ref={ref}
                strokeColor="black"
                strokeWidth={1}
            />
          </>
      )
    }
    {!sketchEnabled && paths.length > 0 && 
    <>
    <Text>Hi</Text>
      <Svg height={Dimensions.get("window").height} width={Dimensions.get("window").width} >
        <Path
            d="M415.5 138.5L415.5 140.5L415.5 153.5L415.5 185.5L415.5 200L415.5 214L415.5 235L415.5 251L414 306.5L409 339.5L401.5 366L394 385.5L380 407L376 412L374 414L373 414.5"
            fill="none"
            stroke="red"
          />
        {paths.map(path => {
          
          (
            <>
            <Text>Test</Text>
            <Path
              d={path.path.toSVGString()}
              fill="none"
              stroke="red"
            />
            </>
          )
        
        }
          
          )}
        </Svg>
        </>
      }
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
            if (y < 20) {setSketchEnabled(true)}
            else if (x > 500) {
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
    marginBottom: 60
  },
  sketchToolbarContainer: {
    backgroundColor: colors.BLUE10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sketchToolbarLeft: {
    paddingHorizontal: "6%",
    paddingTop: 5
  },
  sketchToolbarRight: {
    paddingHorizontal: "6%"
  }
});
