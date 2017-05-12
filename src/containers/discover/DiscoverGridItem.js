import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from '../../icon/GrowthFont';
import AppStyle from '../../theme/styles';

const iconsSize = 30;
const itemOnClickBackgroundColor = 'rgba(255,255,255, .5)';
const LEFT = 'left';
const RIGHT = 'right';

const onclick = () => {};

class GridItem extends Component {
  static componentName = 'GridItem';

  static propTypes = {
    gridItemStyle: View.propTypes.style,
    iconStyle: Text.propTypes.style,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
    titleStyle: Text.propTypes.style,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickBackgroundColor: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  };

  static defaultProps = {
    gridItemStyle: AppStyle.discoverGridItem,
    iconStyle: AppStyle.discoverTextColor,
    iconName: '',
    iconSize: iconsSize,
    titleStyle: AppStyle.discoverGridTextItem,
    title: '',
    onClick: onclick,
    onClickBackgroundColor: itemOnClickBackgroundColor,
    direction: LEFT,

  };

  render = () => (
    <TouchableHighlight
      onPress={this.props.onClick}
      style={this.props.direction === RIGHT
        ? AppStyle.discoverGridDirectionRight
        : AppStyle.discoverGridDirectionLeft}
      underlayColor={this.props.onClickBackgroundColor}
    >
      <View style={this.props.gridItemStyle} >
        <Icon name={this.props.iconName} size={this.props.iconSize} style={this.props.iconStyle} />
        <Text style={this.props.titleStyle}>{this.props.title}</Text>
      </View>
    </TouchableHighlight>
  );

}

export default GridItem;
