import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
class RowLongText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  toogleIsExpanded() {
    const {isExpanded} = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const {label} = this.props;
    const {content} = this.props;
    const {isExpanded} = this.state;
    return (
      <View style={styles.line}>
        <Text style={[styles.cell, styles.label]}>{label}</Text>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              this.toogleIsExpanded();
            }}>
            <Text
              style={[
                styles.cell,
                isExpanded ? styles.expanded : styles.collapsed,
              ]}>
              {content}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  line: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingBottom: 8,
  },
  collapsed: {
    maxHeight: 65,
  },
  expanded: {
    maxHeight: '100%',
  },
});
export default RowLongText;
