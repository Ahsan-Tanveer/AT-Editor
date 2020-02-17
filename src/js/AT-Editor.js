class ATEditor {
  constructor(selector, main_obj = null) {
    this.selector = selector;
    this.finishStyle(main_obj == null ? 'Type something': main_obj.placeholder);
  }

  finishStyle(placeholder) {
      let editable = document.querySelector(this.selector);
      $(editable).attr({'contenteditable':'true', 'id':'at-editable', 'placeholder': placeholder});
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
          <div class="at-action_section"></div>
        </div>
        <div class="at-text_sub_section at-sub">
          <button type="button" class="at-btnStrike at-toolbarBtn" id="at-strike"></button>
          <button type="button" class="at-btnSubScript at-toolbarBtn" id="at-subScript"></button>
          <button type="button" class="at-btnSuperScript at-toolbarBtn" id="at-superScript"></button>
          <button type="button" class="at-btnFontFamily at-toolbarBtn" id="at-fontFamily"></button>
          <button type="button" class="at-btnFontSize at-toolbarBtn" id="at-fontSize"></button>
          <button type="button" class="at-btnFontColor at-toolbarBtn" id="at-fontColor"></button>
          <button type="button" class="at-btnBackgroundColor at-toolbarBtn" id="at-backgroundColor"></button>
          <button type="button" class="at-btnClearFormate at-toolbarBtn" id="at-clearFormate"></button>
        </div>
        <div class="at-paragraph_sub_section at-sub">
          <button type="button" class="at-btnJustify at-toolbarBtn" id="at-justify"></button>
          <button type="button" class="at-btnLineHeight at-toolbarBtn" id="at-lineHeight"></button>
          <button type="button" class="at-btnDecreaseIndent at-toolbarBtn" id="at-decreaseIndent"></button>
          <button type="button" class="at-btnIncreaseIndent at-toolbarBtn" id="at-increaseIndent"></button>
          <button type="button" class="at-btnQuote at-toolbarBtn" id="at-quote"></button>
        </div>
        <div class="at-misll_sub_section at-sub"></div>
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
        <button type="button" class="at-btnBold at-toolbarBtn" id="at-bold" onclick="doFormating(this, 'bold')"></button>
        <button type="button" class="at-btnItalic at-toolbarBtn" id="at-italic" onclick="doFormating(this, 'italic')"></button>
        <button type="button" class="at-btnUnderline at-toolbarBtn" id="at-underline" onclick="doFormating(this, 'underline')"></button>
        <button type="button" class="at-btnMore at-toolbarBtn" id="at-textMore"></button>
      </div>
    `);
  }

  toolbar(obj){
    let paragraph = function() {
      $('#at-editor .at-toolbar .at-paragraph_section').html(`
        <div class="at-paragraphBtn">
          <button type="button" class="at-btnleft at-toolbarBtn" id="at-left" onclick="doFormating(this, 'left')"></button>
          <button type="button" class="at-btnright at-toolbarBtn" id="at-right" onclick="doFormating(this, 'right')"></button>
          <button type="button" class="at-btncenter at-toolbarBtn" id="at-center" onclick="doFormating(this, 'center')"></button>
          <button type="button" class="at-btnMore at-toolbarBtn" id="at-paragraphMore"></button>
        </div>
      `);
    };
    let misll = function(){
      $('#at-editor .at-toolbar .at-misll_section').html(`
        <div class="at-misllBtn">
          <button type="button" class="at-btnOL at-toolbarBtn" id="at-ol" onclick="doFormating(this, 'ol')"></button>
          <button type="button" class="at-btnUL at-toolbarBtn" id="at-ul" onclick="doFormating(this, 'ul')"></button>
          <button type="button" class="at-btnLink at-toolbarBtn" id="at-link" onclick="showUrlPopup(this)"></button>
          <div class="linkPopup">
            <div class="form_wrapper">
              <div id="url_wrapper">
                <div class="link_group">
                  <input type="text" id="input_url" class="float_input" placeholder=" ">
                  <label for="input_url" class="float_label">URL</label>
                </div>
                <div class="link_group">
                  <input type="checkbox" id="url_target">
                  <label for="url_target">Open in new tab</label>
                </div>
                <div class="url_btnWrapper">
                  <button id="url_insert" onclick="doFormating(this, 'link')">Insert</button>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="at-btnEmoji at-toolbarBtn" id="at-emoji"></button>
        </div>
      `);
    };
    let action = function(){
      $('#at-editor .at-toolbar .at-action_section').html(`
        <div class="at-misllBtn">
          <button type="button" class="at-btnUndo at-toolbarBtn" id="at-undo"></button>
          <button type="button" class="at-btnRedo at-toolbarBtn" id="at-redo"></button>
        </div>
      `);
    };
    if(obj.misll && obj.paragraph){
      action();
      paragraph();
      misll();
    }else if(!obj.misll && obj.paragraph){
      action();
      paragraph();
    }else if(obj.misll && !obj.paragraph){
      action();
      misll();
    }
  }
}

$(document).on('click', '.at-btnMore', function(){
  let eleID = $(this).attr('id');
  let subText = $('.at-text_sub_section');
  let subParagraph = $('.at-paragraph_sub_section');
  if(eleID === 'at-textMore'){
    subParagraph.css('display') == 'block' && subParagraph.slideUp();
    subText.slideToggle();
  }else if(eleID === 'at-paragraphMore'){
    subText.css('display') == 'block' && subText.slideUp();
    subParagraph.slideToggle();
  }
});

let selected_;

let showUrlPopup = (context) => {
  selected_ = saveSelection();
  let popup = $(context).next();
  popup.toggle();
  $(popup).find('#input_url').focus();
}

let getURL = (context, selected) => {
  selected = selected.anchorNode.textContent;
  let form = $(context).parents('#url_wrapper');
  let inputURL = $(form).find('#input_url').val();
  inputURL.includes('http') ? inputURL : inputURL = "http://"+inputURL;
  let target = $(form).find('#url_target');
  $(context).parents('.linkPopup').toggle();
  if (inputURL, $(target).prop("checked")){
    return link(inputURL, true);
  }else {
    return link(inputURL);
  }
}

let link = (url, target = false) => {
  restoreSelection(selected_);
  if (window.getSelection().toString()) {
    var a = document.createElement('a');
    a.href = url;
    target ? a.target = '_blank' : '';
    return a;
  }
}

function saveSelection() {
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
          return sel.getRangeAt(0);
      }
  } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
  }
  return null;
}

function restoreSelection(range) {
  if (range) {
      if (window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
      } else if (document.selection && range.select) {
          range.select();
      }
  }
}

let doFormating = (context, param) => {
  $(context).parents('.at-editor').find('div[contenteditable="true"]').focus();
  if(param === 'bold') {
    document.execCommand("bold");
  }else if(param === 'italic') {
    document.execCommand("italic");
  }else if(param === 'underline') {
    document.execCommand("underline");
  }else if(param === 'left') {
    document.execCommand("JustifyLeft", false, "");
  }else if(param === 'right') {
    document.execCommand("JustifyRight", false, "");
  }else if(param === 'center') {
    document.execCommand("JustifyCenter", false, "");
  }else if(param === 'ol') {
    document.execCommand("insertOrderedList", false, "");
  }else if(param === 'ul') {
    document.execCommand("insertUnorderedList", false, "");
  }else if(param === 'link') {
    let selected = window.getSelection();
    let a = getURL(context, selected);
    window.getSelection().getRangeAt(0).surroundContents(a);
  }
}