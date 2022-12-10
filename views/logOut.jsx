import { useContext, useState, useEffect } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { ProjectContext } from "../context";

export function LogOut({navigation}){
    const { setUser } = useContext(ProjectContext);
    const [showBox, setShowBox] = useState(true);

    
    useEffect(() => {
        navigation.jumpTo('projectList');
    }, []);

    return (
        setUser({})
    //     Alert.alert(
    //     `Log out`,
    //     `Are you sure you want to log out?`,
    //     [
    //       // The "Yes" button
    //       {
    //         text: "Yes",
    //         onPress: () => {
    //           setShowBox(false);
    //           setUser({})
    //         },
    //       },
    //       // The "No" button
    //       // Does nothing but dismiss the dialog when tapped
    //       {
    //         text: "No",
    //         onPress: () => {
    //             setShowBox(false);
    //             navigation.jumpTo('projectList');
    //         }
    //       },
    //     ]
    //   )
      )
}


