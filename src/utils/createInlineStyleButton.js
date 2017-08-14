import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import unionClassNames from 'union-class-names';

export default ({ style, styleToRemove, children }) => (
  class InlineStyleButton extends Component {

    toggleStyle = (event) => {
      event.preventDefault();

      let newEditorState = RichUtils.toggleInlineStyle(this.props.getEditorState(), style);

      if (styleToRemove && !this.styleIsActive() && this.styleToRemoveIsActive()) {
        newEditorState = RichUtils.toggleInlineStyle(newEditorState, styleToRemove);
      }

      this.props.setEditorState(newEditorState);
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

    styleIsActive = () => this.props.getEditorState().getCurrentInlineStyle().has(style);

    styleToRemoveIsActive = () => this.props.getEditorState().getCurrentInlineStyle().has(styleToRemove);

    render() {
      const { theme } = this.props;
      const className = this.styleIsActive() ? unionClassNames(theme.button, theme.active) : theme.button;

      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={className}
            onClick={this.toggleStyle}
            type="button"
            children={children}
          />
        </div>
      );
    }
  }
);
