import { Card, Image, Text } from "@rneui/themed";
import { View } from "react-native";

export function Photo({ item }) {
    console.log(item.url);
    return (
        <Card>
            <Card.Title>{item.nom}</Card.Title>
            <Image source={{ uri: item.url }} resizeMode="contain" style={{ width: 200, height: 200 }} />
        </Card>
    )
}