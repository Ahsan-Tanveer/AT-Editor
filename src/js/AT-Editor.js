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
          <button type="button" class="at-btnStrike at-toolbarBtn" id="at-strike" onclick="doFormating(this, 'strike')"></button>
          <button type="button" class="at-btnSubScript at-toolbarBtn" id="at-subScript" onclick="doFormating(this, 'subscript')"></button>
          <button type="button" class="at-btnSuperScript at-toolbarBtn" id="at-superScript" onclick="doFormating(this, 'superscript')"></button>
          <div class="at-dropdown_wrapper">
            <button type="button" class="at-btnFontFamily at-toolbarBtn at-btnDropDown" id="at-fontFamily" onclick="showDropDown(this)"></button>
            <div class="at-dropdown">
              <ul class="at-list">
                <li data-type="fontName" data-value="Arial,Helvetica,sans-serif" style="font-family: Arial,Helvetica,sans-serif;" onclick="getDropDownValue(this)">Arial</li>
                <li data-type="fontName" data-value="Georgia,serif" style="font-family: Georgia,serif" onclick="getDropDownValue(this)">Georgia</li>
                <li data-type="fontName" data-value="Impact,Charcoal,sans-serif" style="font-family: Impact,Charcoal,sans-serif" onclick="getDropDownValue(this)">Impact</li>
                <li data-type="fontName" data-value="Tahoma,Geneva,sans-serif" style="font-family: Tahoma,Geneva,sans-serif" onclick="getDropDownValue(this)">Tahoma</li>
                <li data-type="fontName" data-value="Times New Roman,Times,serif,-webkit-standard" style="font-family: Times New Roman,Times,serif,-webkit-standard" onclick="getDropDownValue(this)">Times New Roman</li>
                <li data-type="fontName" data-value="Verdana,Geneva,sans-serif" style="font-family: Verdana,Geneva,sans-serif" onclick="getDropDownValue(this)">Verdana</li>
              </ul>
            </div>
          </div>
          <div class="at-dropdown_wrapper">
            <button type="button" class="at-btnFontSize at-toolbarBtn at-btnDropDown" id="at-fontSize" onclick="showDropDown(this)"></button>
            <div class="at-dropdown">
              <ul class="at-list">
                <li data-type="fontSize" data-value="8" onclick="getDropDownValue(this)">8</li>
                <li data-type="fontSize" data-value="9" onclick="getDropDownValue(this)">9</li>
                <li data-type="fontSize" data-value="10" onclick="getDropDownValue(this)">10</li>
                <li data-type="fontSize" data-value="12" onclick="getDropDownValue(this)">12</li>
                <li data-type="fontSize" data-value="14" onclick="getDropDownValue(this)">14</li>
                <li data-type="fontSize" data-value="18" onclick="getDropDownValue(this)">18</li>
                <li data-type="fontSize" data-value="24" onclick="getDropDownValue(this)">24</li>
                <li data-type="fontSize" data-value="30" onclick="getDropDownValue(this)">30</li>
                <li data-type="fontSize" data-value="36" onclick="getDropDownValue(this)">36</li>
                <li data-type="fontSize" data-value="48" onclick="getDropDownValue(this)">48</li>
                <li data-type="fontSize" data-value="60" onclick="getDropDownValue(this)">60</li>
                <li data-type="fontSize" data-value="76" onclick="getDropDownValue(this)">76</li>
                <li data-type="fontSize" data-value="96" onclick="getDropDownValue(this)">96</li>
              </ul>
            </div>
          </div>
          <div class="at-dropdown_wrapper">
            <button type="button" class="at-btnFontColor at-toolbarBtn at-btnDropDown" id="at-fontColor" onclick="showDropDown(this)"></button>
            <div class="at-dropdown">
              <div class="at-swatch_wrapper">
                <div data-type="fontColor" data-value="#61BD6D" class="at-swatch" style="width:33.33px; height:33.33px;background:#61BD6D;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#1ABC9C" class="at-swatch" style="width:33.33px; height:33.33px;background:#1ABC9C;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#54ACD2" class="at-swatch" style="width:33.33px; height:33.33px;background:#54ACD2;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#2C82C9" class="at-swatch" style="width:33.33px; height:33.33px;background:#2C82C9;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#9365B8" class="at-swatch" style="width:33.33px; height:33.33px;background:#9365B8;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#475577" class="at-swatch" style="width:33.33px; height:33.33px;background:#475577;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#CCCCCC" class="at-swatch" style="width:33.33px; height:33.33px;background:#CCCCCC;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#41A85F" class="at-swatch" style="width:33.33px; height:33.33px;background:#41A85F;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#00A885" class="at-swatch" style="width:33.33px; height:33.33px;background:#00A885;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#3D8EB9" class="at-swatch" style="width:33.33px; height:33.33px;background:#3D8EB9;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#2969B0" class="at-swatch" style="width:33.33px; height:33.33px;background:#2969B0;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#553982" class="at-swatch" style="width:33.33px; height:33.33px;background:#553982;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#28324E" class="at-swatch" style="width:33.33px; height:33.33px;background:#28324E;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#000000" class="at-swatch" style="width:33.33px; height:33.33px;background:#000000;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#F7DA64" class="at-swatch" style="width:33.33px; height:33.33px;background:#F7DA64;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#FBA026" class="at-swatch" style="width:33.33px; height:33.33px;background:#FBA026;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#EB6B56" class="at-swatch" style="width:33.33px; height:33.33px;background:#EB6B56;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#E25041" class="at-swatch" style="width:33.33px; height:33.33px;background:#E25041;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#A38F84" class="at-swatch" style="width:33.33px; height:33.33px;background:#A38F84;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#EFEFEF" class="at-swatch" style="width:33.33px; height:33.33px;background:#EFEFEF;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#FFFFFF" class="at-swatch" style="width:33.33px; height:33.33px;background:#FFFFFF;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#FAC51C" class="at-swatch" style="width:33.33px; height:33.33px;background:#FAC51C;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#F37934" class="at-swatch" style="width:33.33px; height:33.33px;background:#F37934;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#D14841 class="at-swatch" style="width:33.33px; height:33.33px;background:#D14841;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#B8312F" class="at-swatch" style="width:33.33px; height:33.33px;background:#B8312F;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#7C706B" class="at-swatch" style="width:33.33px; height:33.33px;background:#7C706B;" onclick="getDropDownValue(this)"></div>
                <div data-type="fontColor" data-value="#D1D5D8" class="at-swatch" style="width:33.33px; height:33.33px;background:#D1D5D8;" onclick="getDropDownValue(this)"></div>
              </div>
              <div class="at-colorPicker">
                <label style="font-size:14px;" for="at-colorPicker">Select Color</label>
                <input type="color" id="at-colorPicker">
                <button id="at-colorOK">OK</button>
              </div>
            </div>
          </div>
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
$(document).on('click', '#at-editable', function(){
  $('.at-dropdown').slideUp();
});
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

let showDropDown = (context) => {
  selected_ = saveSelection();
  $('.at-dropdown').slideUp();
  $(context).next().slideToggle();
}

let getDropDownValue = (context) => {
  restoreSelection(selected_);
  $(context).parents('.at-editor').find('div[contenteditable="true"]').focus();
  let fontType = $(context).attr('data-type');
  let fontValue = $(context).attr('data-value');
  let html = window.getSelection().anchorNode.textContent;
  let parentEle = window.getSelection().anchorNode.parentElement;
  let firstNode = window.getSelection().anchorNode.childNodes[1] != undefined ? window.getSelection().anchorNode.childNodes[1].nodeName : 'OTHER';
  if(fontType == 'fontName') {
    if(window.getSelection){
      if(parentEle.style.fontFamily) {
        parentEle.style.fontFamily = fontValue;
      }else {
        if(firstNode == 'SPAN'){
          window.getSelection().anchorNode.childNodes[1].style.fontFamily = fontValue;
        }else {
          let span = document.createElement('span');
          span.style.fontFamily = fontValue;
          span.classList.add('fontStyle');
          window.getSelection().getRangeAt(0).surroundContents(span);
          $('.fontStyle').last().html($('.fontStyle').last().html()+'&#8203;');
        }
      }
    }
  }else if(fontType == 'fontSize') {
    if(window.getSelection){
      if(parentEle.style.fontSize) {
        parentEle.style.fontSize = fontValue+'px';
      }else {
        if(firstNode == 'SPAN'){
          window.getSelection().anchorNode.childNodes[1].style.fontSize = fontValue+'px';
        }else {
          let span = document.createElement('span');
          span.style.fontSize = fontValue+'px';
          span.classList.add('fontStyle');
          window.getSelection().getRangeAt(0).surroundContents(span);
          $('.fontStyle').last().html($('.fontStyle').last().html()+'&#8203;');
        }
      }
    }
  }else if(fontType == 'fontColor') {
    if(window.getSelection){
      if(parentEle.style.color) {
        parentEle.style.color = fontValue;
      }else {
        if(firstNode == 'SPAN'){
          window.getSelection().anchorNode.childNodes[1].style.color = fontValue;
        }else {
          let span = document.createElement('span');
          span.style.color = fontValue;
          span.classList.add('fontStyle');
          window.getSelection().getRangeAt(0).surroundContents(span);
          $('.fontStyle').last().html($('.fontStyle').last().html()+'&#8203;');
        }
      }
    }
  }
  console.log(parentEle);
  $(context).parents('.at-dropdown').slideToggle();
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
  }else if(param === 'strike') {
    document.execCommand("strikeThrough");
  }else if(param === 'subscript') {
    document.execCommand("subscript");
  }else if(param === 'superscript') {
    document.execCommand("superscript");
  }
}