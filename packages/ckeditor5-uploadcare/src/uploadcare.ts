/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module uploadcare/uploadcare
 * @publicApi
 */

import { Plugin, type Editor } from 'ckeditor5/src/core.js';
import UploadcareUI from './uploadcareui.js';
import UploadcareEditing from './uploadcareediting.js';

import '@uploadcare/file-uploader/web/uc-file-uploader-inline.min.css';
import '../theme/uploadcare-form.css';
import '../theme/uploadcare-theme.css';

/**
 * Uploadcare plugin that allows you to use the Uploadcare features.
 */
export default class Uploadcare extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [ UploadcareEditing, UploadcareUI ] as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'Uploadcare' as const;
	}

	/**
	 * @inheritDoc
	 */
	constructor( editor: Editor ) {
		super( editor );

		editor.config.define( 'uploadcare.sourceList', [ 'local', 'camera', 'url' ] );
	}
}
