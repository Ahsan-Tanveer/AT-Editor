class ATEditor {
  constructor(selector) {
    this.selector = selector;
    this.finishStyle();
  }

  finishStyle() {
      let editable = document.querySelector(this.selector);
      $(editable).html('Type something.');
      $(editable).attr({'contenteditable':'true', 'id':'at-editable', 'placeholder':'Type something'});
      let toolbarHtml= this.set_toolbar(editable);
      $(editable).before(toolbarHtml);
      $(editable).remove();
      this.textMenu();
  }

  set_toolbar(editable){
    return `
      <div class="at-editor" id="at-editor">
        <div class="at-toolbar">
          <div class="at-text_section"></div>
          <div class="at-paragraph_section"></div>
          <div class="at-misll_section"></div>
        </div>
        <div class="at-wrapper">
          ${editable.outerHTML}
        </div>
        <div class="at-footer"></div>
      </div>
    `;
  }

  textMenu(){
    $('#at-editor .at-toolbar .at-text_section').html(`
      <div class="at-textBtn">
        <button type="button" class="at-btnBold at-toolbarBtn" id="at-bold"></button>
        <button type="button" class="at-btnItalic at-toolbarBtn" id="at-italic"></button>
        <button type="button" class="at-btnUnderline at-toolbarBtn" id="at-underline"></button>
        <button type="button" class="at-btnTextMore at-toolbarBtn" id="at-textMore"></button>
      </div>
    `);
  }

  toolbar(obj){
    let paragraph = function() {
      $('#at-editor .at-toolbar .at-paragraph_section').html(`
        <div class="at-paragraphBtn">
          <button type="button" class="at-btnleft at-toolbarBtn" id="at-left"></button>
          <button type="button" class="at-btnright at-toolbarBtn" id="at-right"></button>
          <button type="button" class="at-btncenter at-toolbarBtn" id="at-center"></button>
          <button type="button" class="at-btnparagraphMore at-toolbarBtn" id="at-paragraphMore"></button>
        </div>
      `);
    };
    let misll = function(){
      $('#at-editor .at-toolbar .at-misll_section').html(`
        <div class="at-misllBtn">
          <button type="button" class="at-btnOL at-toolbarBtn" id="at-ol"></button>
          <button type="button" class="at-btnLink at-toolbarBtn" id="at-link"></button>
          <button type="button" class="at-btnEmoji at-toolbarBtn" id="at-emoji"></button>
          <button type="button" class="at-btnTextMore at-toolbarBtn" id="at-textMore"></button>
        </div>
      `);
    };
    if(obj.misll && obj.paragraph){
      paragraph();
      misll();
    }else if(!obj.misll && obj.paragraph){
      paragraph();
    }else if(obj.misll && !obj.paragraph){
      misll();
    }
  }
}
