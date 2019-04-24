import vi$ from './utilities';

export default function api(modal, endPoint){
  const apiRef = this;
  const BASE_END_POINT = endPoint;
  apiRef.createVoiceEnrollment = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'createVoiceEnrollment',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.createFaceEnrollment = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'createFaceEnrollment',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.createVideoEnrollment = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'createVideoEnrollment',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.faceVerification = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'faceVerification',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.faceVerificationWithLiveness = (options, callback) => {
    console.log(options);
    vi$.post(
      modal,
      BASE_END_POINT,
      'faceVerificationWithLiveness',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.voiceVerification = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'voiceVerification',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.videoVerification = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'videoVerification',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.videoVerificationWithLiveness = (options, callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'videoVerificationWithLiveness',
      vi$.getToken(),
      options,
      callback
    );
  }

  apiRef.checkIfEnoughFaceEnrollments = (callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'enoughFaceEnrollments',
      vi$.getToken(),
      {},
      callback
    );
  }

  apiRef.checkIfEnoughVoiceEnrollments = (callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'enoughVoiceEnrollments',
      vi$.getToken(),
      {},
      callback
    );
  }

  apiRef.checkIfEnoughVideoEnrollments = (callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'enoughVideoEnrollments',
      vi$.getToken(),
      {},
      callback
    );
  }

  apiRef.deleteFaceEnrollments = (callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'deleteFaceEnrollments',
      vi$.getToken(),
      {},
      callback
    );
  }

  apiRef.deleteVoiceEnrollments = (callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'deleteVoiceEnrollments',
      vi$.getToken(),
      {},
      callback
    );
  }

  apiRef.deleteVideoEnrollments = (callback) => {
    vi$.post(
      modal,
      BASE_END_POINT,
      'deleteVideoEnrollments',
      vi$.getToken(),
      {},
      callback
    );
  }
}
