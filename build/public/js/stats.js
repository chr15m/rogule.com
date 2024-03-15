const stats = (function () {
    const FILENAME = {
        TEMPLATE: 'rogule-browser-backup-[date].json',
        REPLACEABLE_ITEM: '[date]'
    };
    const LS_ITEM = `["~#'","~:game-state"]`;


    function getFilename(TEMPLATE, REPLACEABLE_ITEM) {
        return TEMPLATE.replace(REPLACEABLE_ITEM, getBackupDate())
    }


    function getBackupDate() {
        const [month, day, year] = new Date().toLocaleDateString('en').split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }


    function save(filename, data) {
        if (data) {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }


    function handleNewUpload(event) {
        const VALID_TYPE = 'application/json';
        const field = event.target;
        const file = field.files[0];
        if (file.type === VALID_TYPE) {
            const reader = new FileReader();
            reader.onload = (event) => {
                handleFileLoad(event, field);
            };
            reader.readAsText(file)
        } else {
            field.value = null;
        }
    }


    function saveStats(itemName, data) {
        localStorage.setItem(itemName, data);
    }

    function disableBlock(el) {
        console.log(el)
        el.setAttribute('aria-hidden', 'true');
        el.style.pointerEvents = 'none';
        const links = el.querySelectorAll('a');
        const buttons = el.querySelectorAll('button');
        const items = [...links, ...buttons];
        items.forEach(item => {
            item.setAttribute('tabindex', -1);
            item.classList.add('--tmp-disabled');
        });
    }

    function enableBlock(el) {
        el.setAttribute('aria-hidden', 'false');
        el.style.pointerEvents = null;
        const items = el.querySelectorAll('.--tmp-disabled');
        items.forEach(item => {
            item.removeAttribute('tabindex');
            item.classList.remove('--tmp-disabled');
        });
    }

    function closeWarning(modal, app) {
        modal.classList.remove('warning-modal--visible');
        modal.remove();
        enableBlock(app);
    }


    function showWarning(data) {
        const modalTemplate = `
          <section class="warning-modal js__warning-modal">
              <div class="warning-modal__panel">
                  <h2 class="warning-modal__title mage">Magic is a powerful, thus dangerous <sup><span class="warning-modal__asterisk">*</span></sup> ally.</h2>
                  <p class="warning-modal__subtitle">Do you really want to continue?</p>
                  <ul class="warning-modal__actions">
                      <li class="warning-modal__action">
                          <button class="key warning-modal__action-btn-continue js__warning-modal-btn-continue">YAS!</button>
                      </li>
                      <li class="warning-modal__action">
                          <button class="warning-modal__action-btn-cancel js__warning-modal-btn-cancel">Hell, no</button>
                      </li>
                  </ul>
                  <p class="warning-modal__note"><span class="warning-modal__asterisk">*</span> Maybe there is a previous save in this browser.</p>
              </div>
          </section>
      `;
        const game = document.querySelector('.game');
        const app = game.querySelector('#app');
        game.insertAdjacentHTML('beforeend', modalTemplate);
        const modal = game.querySelector('.js__warning-modal');
        const modalContinue = modal.querySelector('.js__warning-modal-btn-continue');
        const modalCancel = modal.querySelector('.js__warning-modal-btn-cancel');
        modal.classList.add('warning-modal--visible');
        disableBlock(app);

        modalContinue && modalContinue.addEventListener('click', () => {
            localStorage.setItem(LS_ITEM, JSON.stringify(data));
            closeWarning(modal, app);
        });
        modalCancel && modalCancel.addEventListener('click', () => {
            closeWarning(modal, app);
        });
    }


    function handleFileLoad(event, field) {
        const contents = JSON.parse(event.target.result);

        if (typeof contents === 'object' && contents.length) {
            showWarning(contents);
        }
        field.value = null;

    }


    function init(wrapper) {
        const backupBtn = wrapper.querySelector('.js__stats-action-backup');
        const importBtn = wrapper.querySelector('.js__stats-action-import');
        const uploadBtn = wrapper.querySelector('.js__app-upload-stats');
        backupBtn.addEventListener('click', () => {
            const { TEMPLATE, REPLACEABLE_ITEM } = FILENAME;
            const filename = getFilename(TEMPLATE, REPLACEABLE_ITEM);
            const myStats = localStorage.getItem(LS_ITEM);
            save(filename, myStats);
        });
        importBtn.addEventListener('click', () => {
            uploadBtn.click();
        });
        uploadBtn.addEventListener('change', handleNewUpload);
    }

    return {
        init,
    };
})();

window.addEventListener('load', () => {
    const statsBlock = document.querySelector('.js__stats');
    statsBlock && stats.init(statsBlock);
});

