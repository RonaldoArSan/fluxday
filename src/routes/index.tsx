import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sign from "../screens/Sign";
import Welcome from "../screens/Welcome";

const Stack =createNativeStackNavigator();

export default function Routes(){
    return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" 
        component={Welcome} />

        <Stack.Screen 
        name="Sign" 
        component={Sign} />

        </Stack.Navigator>
    </Stack.Navigator>
    )

      
}