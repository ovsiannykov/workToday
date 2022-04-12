import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Input from "../../../components/Input";
import BigButton from "../../../components/BigButton";

const logo = require("../../../assets/images/Logo.png");

const Login = ({ navigation, login, ...props }) => {
  const [typeEntrance, setTypeEntrance] = useState("login");

  return (
    <View style={styles.loginBox}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.tabMenu}>
        <View style={styles.switchGroup}>
          <TouchableOpacity
            style={{ marginRight: 50 }}
            onPress={() => setTypeEntrance("login")}
          >
            <Text
              style={{
                opacity: typeEntrance == "login" ? 1 : 0.5,
                ...styles.switchButton,
              }}
            >
              Вхід
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTypeEntrance("registr")}>
            <Text
              style={{
                opacity: typeEntrance == "registr" ? 1 : 0.5,
                ...styles.switchButton,
              }}
            >
              реєстрація
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputsBox}>
          {typeEntrance == "login" ? (
            <View>
              <Text style={styles.welcomeText}>Ласкаво просимо</Text>
              <Text style={styles.subTitle}>Віхд у ваш аккаунт</Text>
              <View>
                <Input title='Телефон' keyType='numeric' />
              </View>
              <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Input
                  title='Пароль'
                  textContentType='password'
                  secureTextEntry={true}
                />
              </View>
              <BigButton title='УВIЙТИ' />
              <View style={styles.loginSmallButtonsBox}>
                <Text style={styles.restorePassword}>Забули пароль?</Text>
                <TouchableOpacity>
                  <Text style={styles.viewPasswordBtn}>Відновити</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.welcomeText}>Ласкаво просимо</Text>
              <Text style={styles.subTitle}>Cтворення нового аккаунту</Text>
              <View>
                <Input title='Телефон' keyType='numeric' />
              </View>
              <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Input
                  title='Пароль'
                  textContentType='password'
                  secureTextEntry={true}
                />
              </View>
              <BigButton title='РЕЄСТРАЦІЯ' />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Login;
