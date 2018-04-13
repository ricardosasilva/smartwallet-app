import * as React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { registrationActions } from 'src/actions'
import { AnyAction } from 'redux'
import { RootState } from 'src/reducers/'
import Immutable from 'immutable'

export interface ConnectProps {
  loadingMsg: string,
  generateAndEncryptKeyPairs: () => void
}

interface Props extends ConnectProps {}

export interface State {
}

export class LoadingContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.generateAndEncryptKeyPairs()
  }

  render() {
    return (
     <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     }}>
       <ActivityIndicator size='large' color="#00ff00" />
       <Text>{this.props.loadingMsg}</Text>
     </View>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    loadingMsg: state.registration.loading.getIn(['loadingMsg'])
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    generateAndEncryptKeyPairs: () => dispatch(registrationActions.generateAndEncryptKeyPairs())
  }
}

// tslint:disable-next-line
export const Loading = connect(mapStateToProps, mapDispatchToProps)(LoadingContainer)
